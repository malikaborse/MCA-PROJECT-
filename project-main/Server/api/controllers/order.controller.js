import Order from "../models/order.model.js";
import User from "../models/user.model.js";

export const addToCart = async (req, res, next) => {
    const orders = req.body;
    try {
        for (const orderData of orders) {
            const { image, name, price, quantity, total, user } = orderData;
            const newOrder = new Order({ image, name, price, quantity, total, user });
            const savedOrder = await newOrder.save();
            const userrDoc = await User.findById(user);
            if (!user) {
                return res.status(404).json({ success: false, message: 'User not found' });
            }
            userrDoc.orders.push(savedOrder);
            await userrDoc.save();
        }
        res.status(201).json({ success: true, message: 'Items added to cart successfully' });
    } catch (error) {
        next(error);
    }
};

export const getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({});
        res.status(200).json({ success: true, orders });
    } catch (error) {
        next(error);
    }
};

export const getUserOrders = async (req, res, next) => {
    const { user } = req.body;
    try {
        const orders = await Order.find({ user: user });
        res.status(200).json({ success: true, orders });
    } catch (error) {
        next(error);
    }
}

export const updateOrderStatus = async (req, res, next) => {
    const { orderId, status } = req.body;
    try {
        if (req.user.id != req.params.userId) {
            return res.status(400).json({ success: false, message: 'You are not allowed to update this user' });
        }
        const seller = await User.findById(req.params.userId);
        if (!seller || !seller.isSeller) {
            return res.status(400).json({ success: false, message: 'You are not allowed to update this order' });
        }
        const updatedOrder = await Order.findByIdAndUpdate(orderId, { $set: { status }, }, { new: true });

        if (!updatedOrder) {
            return res.status(400).json({ success: false, message: "Order not found" });
        }
        res.status(200).json({ success: true, message: "Order status updated successfully" });
    } catch (error) {
        next(error);
    }
};
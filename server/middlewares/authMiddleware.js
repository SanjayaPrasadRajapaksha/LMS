import { clerkClient } from "@clerk/express";

// Middleware to protect educator routes
export const projectEducator = async (req, res, next) => {
    try {
        const userId = req.auth.userId;
        const response = await clerkClient.users.getUser(userId);

        if (response.privateMetadata.role !== 'educator') {
            return res.status(403).json({ success: false, message: 'Unauthorized Access' });
        }

        next();
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

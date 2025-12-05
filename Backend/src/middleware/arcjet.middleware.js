import aj from "../lib/arcjet.js";

import { isSpoofedBot } from "@arcjet/inspect";

export const arcjetProtection = async (req, res, next) => {
  try {
    const decision = await aj.protect(req);

    if (decision.isDenied()) 
    {
      if (decision.reason.isRateLimit()) {
        return res.status(429).json({
          message: "Rate Limit Exceeded . Please Try Again later",
        });
      } else if (decision.reason.isBot()) {
        return res.status(403).json({
          message: "Bot access Denied",
        });
      } else {
        return res.status(403).json({
          message: "Access denied by security policy.",
        });
      }
    }


    // checking for spoof bots here
    // so spoof bots are the bots but they act like a human so to identify them we have improted spooofed form arcjet okay
    // 

    if(decision.results.some(isSpoofedBot))
    {
        return res.status(403).json({
            error : "Spoofed Bot Detected . Access Denied",
            message : "Malicious Bot Activity Detected . Access Denied",
        });
    }

    next();

  } catch (error) {
    console.log("Arcjet Protection Error : ", error);
    next();
  }
};

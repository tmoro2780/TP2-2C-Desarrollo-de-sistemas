import { Request, Response, NextFunction } from "express";

export class SessionCheck {
    checkUserIsLogged(req: Request, res: Response, next: NextFunction) {
        if (!req.session.user) {
            res.status(401).json({ ok: false, msg: "No inició sesión" });
            return;
        }
        next();
    }

    checkUserIsUnlogged(req: Request, res: Response, next: NextFunction) {
        if (req.session.user) {
            res.status(401).json({ ok: false, msg: "Ya inició sesión" });
            return;
        }
        next();
    }
}

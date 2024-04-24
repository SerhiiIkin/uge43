import { createElev } from "@/server/controllers/elev";

export default function handler(req, res) {
    switch (req.method) {
        case "POST":
            handlePOST(req, res);
            break;
        case "GET":
            handleGET(req, res);

            break;

        default:
            break;
    }

    function handleGET(req, res) {
        res.status(200).json({ message: "Dette er en GET-forespørsel" });
    }
    function handlePOST(req, res) {
        createElev(req, res);
        // Eksempel: Lagre dataene i en database
        // database.save(body);
    }
}

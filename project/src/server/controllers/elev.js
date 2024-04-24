import Elev from "@/server/models/Elev";
import Skole from "@/server/models/Skole";
import Uddannelse from "@/server/models/Uddannelse";
import { sendMyEmail } from "@/server/utils/sendEmail";

export async function createElev(req, res) {
    try {
        const {
            fornavn,
            efternavn,
            gade,
            postnummer,
            by,
            mailadresse,
            telefonnummer,
            idskole,
            iduddannelse,
            status,
        } = req.body;

        const newElev = new Elev({
            fornavn,
            efternavn,
            gade,
            postnummer,
            by,
            mailadresse,
            telefonnummer,
            idskole,
            iduddannelse,
            status,
        });

        await newElev.save();

        const skole = await Skole.findById(idskole);
        if (!skole) return res.status(404).json("Unable to find school");
        const uddannelse = await Uddannelse.findById(iduddannelse);
        if (!uddannelse) return res.status(404).json("Unable to find uddannelse");

       
        return res.status(200).json({ message: "New elev created", newElev });
    } catch (error) {
        res.status(500).send({
            message: "Server Error, cant create elev",
            error,
        });
    }
}

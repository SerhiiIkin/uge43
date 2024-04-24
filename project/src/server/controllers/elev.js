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
        console.log(newElev);
        return res.jstatus(200).json({ message: 'Dette er en POST-forespørsel', data: newElev })
        // await newElev.save();

        // const skole = await Skole.findById(idskole);
        // if (!skole) return res.status(404).json("Unable to find school");
        // const uddannelse = await Uddannelse.findById(iduddannelse);
        // if (!uddannelse) return res.status(404).json("Unable to find uddannelse");

        const send_to = mailadresse;
        const send_from = process.env.EMAIL_FROM;
        const reply_to = mailadresse;
        const subject = "praktik plads.";
        const message = `Du er tilmeld til ny praktik i skole ${skole.navn} på uddannelse ${uddannelse.navn}`;

        // await sendMyEmail(subject, message, send_to, send_from, reply_to);
        // return res.status(200).json({ message: "New elev created", newElev });
    } catch (error) {
        res.status(500).send({
            message: "Server Error, cant create elev",
            error,
        });
    }
}

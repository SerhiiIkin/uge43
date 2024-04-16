export default (req, res) => {
    switch (req.method) {
        case "POST":
            break;
        case "GET":
            res.status(200).json({ name: "John Doe" });
            break;

        default:
            break;
    }
};

const data = [
    {
        "id": 1
    },
    {
        "id": 2
    },
    {
        "id": 3
    },
]

exports.list = (req, res) => {

    res.json(data)

}
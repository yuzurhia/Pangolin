const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Pangolin = require('../models/pangolin');

exports.createPangolin = (req, res) => {
    const { email, password, role } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            const pangolin = new Pangolin({
                email,
                password: hash,
                role
            });
            pangolin.save()
                .then(() => res.status(201).json({ message: 'Pangolin created!' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res) => {
    Pangolin.findOne({ email: req.body.email })
        .then(pangolin => {
            if (!pangolin) {
                return res.status(401).json({ error: 'Pangolin not found' });
            }
            bcrypt.compare(req.body.password, pangolin.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Incorrect password' });
                    }
                    res.status(200).json({
                        pangolinId: pangolin._id,
                        token: jwt.sign(
                            { pangolinId: pangolin._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
};
const getUser = db.users.find({}, "id");
const users = [];
const totalLeavesPlayers = getTotalLeavesPlayers[0].total;
const amountPlayers = User.countDocuments({});

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
          const newUser = new User({
          username : req.body.username,
          email : req.body.email,
          password : hash,
          leaves : totalLeavesPlayers / amountPlayers
        });
        newUser.save()
          .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
          .catch(error => res.status(400).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };

function getLeaves() {
    getUser.forEach((user) => {
        users.push(user._id);
    });

    users.forEach((user) => {
    let totalLeaves = 0;
    let treeQuery = db.trees.find({ owner: user });

    treeQuery.forEach((tree) => {
        leavesOnTree = tree.diameter * tree.height;
        totalLeaves = Math.ceil(totalLeaves + leavesOnTree);
    });

    
    db.users.updateOne({ _id: user }, { $inc: { leaves: totalLeaves } });

    })
}

function loseLeaves() {
    getUser.forEach((user) => {
        users.push(user._id);
    });

    users.forEach((user) => {
        let newLeaves = Math.ceil(user.leaves / 2);
    });

    db.users.updateOne({_id: user._id}, {$set: {leaves: newLeaves}});
}

setInterval(getLeaves, 900000);

setInterval(loseLeaves, 3600000);
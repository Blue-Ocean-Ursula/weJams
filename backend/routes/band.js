var express = require('express');
const router = express.Router();
const {JamsBand} = require('./../db/schema.js')

// ROUTES

router.get('/', async (req, res) => {
  try {
    console.log('req.body.bandname', req.body.bandname);
    if (req.body.bandname) {
      const data = await JamsBand.find(req.body);
      res.status(200).send(data);
    } else {
      const data = await JamsBand.find({});
      res.status(200).send(data);
   }
  } catch (error) {
    console.log('error!:', error);
  }
});

router.delete('/', (req, res) => {
  console.log('req:', req.body);
  JamsBand.findOneAndDelete(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {throw err;})
})

router.post('/', async (req, res) => {
  try {
    const data = await JamsBand.create(req.body);
    res.status(200).send(await JamsBand.find({}));
  } catch (error) {
    console.log('error!:', error);
  }
});

router.post('/uploads', ((req, res) => {
  var data = req.body;
  addNewSong(data)
  .then((result) => { res.status(200).send(result)})
  .catch((error) => {console.log('error:', error)})
}))

router.post('/version', ((req, res) => {
  var data = req.body;
  console.log('data:', data);
  addNewVersion(data)
  .then((result) => { res.status(200).send(result)})
  .catch((error) => {console.log('error:', error)})
}))

router.put('/', (req, res) => {
  var updateData;
  var followOrUnfollow;
  var likeOrDislike;
  for (var key  in req.body) {
    if (key !== 'bandname' &&
        key !== 'followOrUnfollow' &&
        key !== 'likeOrDislike') {
        updateData = {[key]: req.body[key]};
        }
      if (key === 'followOrUnfollow') {
        followOrUnfollow = req.body[key];
      }
      if (key === 'likeOrDislike') {
        likeOrDislike = req.body[key];
      }
    }
  updateBand(req.body, updateData, followOrUnfollow, likeOrDislike)
  .then((result) => { res.status(200).send(result)})
  .catch((error) => {console.log('error:', error)})
  });


// CONTROLLERS

const addNewSong = (data) => {
  var filter = {"bandname": data.bandname};
  console.log('filter:', filter);
  var song = {
    musicName: "new butterly song",
    version_history: {
    version_name: "Original",
    description: "fly",
    url: "http://aweaewawe/wasd.com/weaa12353",
    likes: 4,
    createdAt: "Wed Aug 17 2021 11:21:26"
    }
  };
  console.log('song:', song);
  var update = {$push: {'uploads': song}};
  return JamsBand.findOneAndUpdate(filter, update);
}

const addNewVersion = (data) =>  {
  var newEntry = {
    version_name: data.uploads.version_history.version_name,
    description: data.uploads.version_history.description,
    url: data.uploads.version_history.url,
    likes: data.uploads.version_history.likes,
    created_At: data.uploads.version_history.createdAt,
  }
  filter = {"bandname": data.bandname, "uploads.musicName": data.uploads.musicName};
  update = {$push: { "uploads.$.version_history": newEntry}}
  return JamsBand.findOneAndUpdate(filter, update);
}

const updateBand = (data, updateData, followOrUnfollow, likeOrDislike, new_entry) => {
  var filter = {bandname: data.bandname}
  var update = null || updateData

  // add follower
  if (update.followedby && followOrUnfollow === 'follow') {
    console.log('followOrUnfollow:', followOrUnfollow);
    update = { $push: update };
    console.log('l.121', 'filter:', filter, 'update:', update);
  // remove follower
  } else if (update.followedby && followOrUnfollow=== 'unfollow') {
    update = { $pull: update };
  }

  if (likeOrDislike === 'like') {
    var newupdate = '';
    JamsBand.find({})
      .then(() => {
        filter = {"bandname": data.bandname, "uploads.title": update.uploads.title, "uploads.version_history.version_name": update.uploads.version_history.version_name};
        update = {$inc: {"uploads.$.version_history.$.likes": 1}};
        console.log('filter:', filter, 'likeOrDislike:', likeOrDislike);
        return JamsBand.findOneAndUpdate(filter, update);
      })
  }
  return JamsBand.findOneAndUpdate(filter, update);
};


module.exports = router;

{
  "bandname": "Fire",
  "followedby": "Jack",
  "followOrUnfollow": "follow"
}
const { v4: uuid4 } = require('uuid');

const UrlEncrypt = require('../models/urlEncrypt');

const isValidUrl = (url) => {
  try {
    const newURl = new URL(url);

    return newURl.protocol === 'http:' || newURl.protocol === 'https:';
  } catch (err) {
    return false;
  }
};

const CreateShorturl = async (req, res) => {
  const { url } = req.body;

  if (!isValidUrl(url)) {
    return res.json({
      error: 'invalid url',
    });
  }

  const short_url = uuid4();

  const encrypt = await UrlEncrypt.create({
    url_id: short_url,
    original_url: url,
  });

  res.json({
    original_url: url,
    short_url,
  });
};

const GetShortUrl = async (req, res) => {
  const { shorturl } = req.params;

  const url = await UrlEncrypt.findByPk(shorturl);

  if (!url) {
    return res.json({
      error: 'invalid url',
    });
  }

  res.redirect(url.original_url);
};

module.exports = {
  CreateShorturl,
  GetShortUrl,
};

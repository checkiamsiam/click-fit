exports.uploadImage = async (req, res, next) => {
  try {
    const inputted_image = await req.file;

    if (!inputted_image) {
      return res.status(400).send({
        success: false,
        message: "Image is required",
      });
    }

    const imgUrl = `${req?.protocol}://${req.headers["host"]}/images/${inputted_image.filename}`;

    res.status(200).send({
      success: true,
      message: "Image Uploaded successfully",
      data: { imgUrl, ...inputted_image },
    });
  } catch (error) {
    next(error);
  }
};

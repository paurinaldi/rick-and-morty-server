import { Request, Response } from 'express';
import firebaseApp from '../helpers/firebase';
import UserModel from '../models/user';
import { BodyResponse, User } from '../types';

const getAllUsers = async (
  req: Request,
  res: Response<BodyResponse<User[]>>
) => {
  try {
    const allUsers = await UserModel.find(req.query);

    return res.status(200).json({
      message: 'Users obtained successfully.',
      data: allUsers,
      error: false,
    });
  } catch (error: any) {
    return res.status(error.status).json({
      message: error.message,
      error: true,
      data: undefined,
    });
  }
};

const createUser = async (req: Request, res: Response<BodyResponse<User>>) => {
  try {
    const isUsed = await UserModel.findOne({ email: req.body.email });
    if (isUsed) {
      return res.status(400).json({
        message: `User with email ${req.body.email} is already registered.`,
        error: true,
      });
    }

    const newFirebaseUser = await firebaseApp.auth().createUser({
      email: req.body.email,
      password: req.body.password,
    });

    const newUser = new UserModel({
      name: req.body.name,
      email: req.body.email,
      firebaseUid: newFirebaseUser?.uid,
    });

    const successData = await newUser.save();

    return res.status(201).json({
      message: 'User created successfully.',
      data: successData,
      error: false,
    });
  } catch (error: any) {
    return res.status(error.status).json({
      message: error.message,
      error: true,
    });
  }
};

const updateFavoriteCharacter = async (
  req: Request,
  res: Response<BodyResponse<User>>
) => {
  try {
    const userById = await UserModel.findOne({ _id: req.params.id });
    if (!userById) {
      throw new Error(`No user found with ID ${req.params.id}.`);
    }

    const characterFound = userById?.favoriteCharacters?.some(
      (id) => id === req.body.favoriteCharacter
    );

    const response = await UserModel.findOneAndUpdate(
      { _id: req.params.id },
      {
        [characterFound ? '$pull' : '$push']: {
          favoriteCharacters: req.body.favoriteCharacter,
        },
      },
      { new: true }
    );
    const operation = characterFound ? 'deleted' : 'added';
    return res.status(200).json({
      message: `Favorite character successfully ${operation}`,
      data: response || ({} as User),
      error: false,
    });
  } catch (error: any) {
    return res.status(error.status).json({
      message: error.message,
      error: true,
      data: undefined,
    });
  }
};

export default {
  getAllUsers,
  createUser,
  updateFavoriteCharacter,
};

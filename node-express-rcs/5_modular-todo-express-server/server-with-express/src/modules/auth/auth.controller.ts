import { Request, Response } from 'express';
import { authServices } from './auth.service';

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const result = await authServices.loginUser(email, password);
    // console.log(result.rows[0]);
    res.status(200).json({
      success: true,
      message: 'Logged In Successfully',
      data: result, //will contain the token along with data. //@ the token can be stored in the request header
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const authControllers = { loginUser };

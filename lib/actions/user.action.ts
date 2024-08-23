"use server";

import { revalidatePath } from "next/cache";

import dbConnect from "../database/dbConnect";
import User from "../database/models/user.model";

export async function createUser(user: CreateUserProps) {
  try {
    await dbConnect();

    const newUser = await User.create(user);

    return JSON.parse(
      JSON.stringify({
        success: true,
        newUser,
      })
    );
  } catch (error) {
    return Response.json({
      success: false,
      message: "something went wrong",
    });
  }
}

//you can modify you'r own this updatauser session
// export async function updateUser(clerkId: string, user: UpdateUserProps) {
//   try {
//     await dbConnect();

//     const updateUser = await User.findByIdAndUpdate({ clerkId }, user, {
//       new: true,
//     });

//     if (!updateUser) throw new Error("User update faild");

//     return JSON.parse(
//       JSON.stringify({
//         success: true,
//         updateUser,
//       })
//     );
//   } catch (error) {
//     return Response.json({
//       success: false,
//       message: "something went wrong",
//     });
//   }
// }

export async function deteleUser(clerkId: string) {
  try {
    await dbConnect();

    const user = await User.findOne({ clerkId });

    //you can modify you'r own this error
    if (!user) {
      throw new Error("User not found");
    }

    const deletedUserProcess = await await User.findByIdAndDelete(user._id);
    return deletedUserProcess
      ? JSON.parse(JSON.stringify(deletedUserProcess))
      : null;
    revalidatePath("/");
  } catch (error) {
    return Response.json({
      success: false,
      message: "something went wrong",
    });
  }
}

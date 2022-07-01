export interface CommentBody {
  postid: number;
  text: string;
  userid: string;
}

export interface UserBody {
  userid: string;
  password: string;
  nickname: string;
}
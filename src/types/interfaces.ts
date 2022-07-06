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

export interface Payload {
  userid: string;
  nickname: string;
}

export interface PostBody {
  algCode: string;
  text: string;
  tag1: string;
  tag2: string;
  tag3: string;
  userid: string;
}
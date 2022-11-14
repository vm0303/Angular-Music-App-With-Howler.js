import {Howl} from "howler";

export default interface MP3Song
{
  name: string;
  artist: string;
  howl: Howl;
  index: number;
}

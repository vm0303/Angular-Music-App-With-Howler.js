import { Component, OnInit } from '@angular/core';
import MP3Song from "./model/MP3Song";
import {Howl} from "howler";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'music-player-app';

  // need them for Howler.js to read the MP3 files.
  constructor() {

  }
  // need them for Howler.js to read the MP3 files.
  ngOnInit(): void
  {

  }

  songsIndex: number = 0;
  songName: string = "";
  songArtist: string ="";
  song: MP3Song[] =
    [
      {
        name: "Bleeping Demo",
        artist: "Kevin MacLeod",
        index: 0,
        howl: new Howl({
          src: ["./assets/MP3_Files/BleepingDemo.mp3"],
          html5: true
        })
      },
      {
        name: "Cherry Monday",
        artist: "Kevin MacLeod",
        index: 1,
        howl: new Howl({
          src: ["./assets/MP3_Files/CheeryMonday.mp3"],
          html5: true
        })
      },
      {
        name: "Jerry Five",
        artist: "Kevin MacLeod",
        index: 2,
        howl: new Howl({
          src: ["./assets/MP3_Files/JerryFive.mp3"],
          html5: true
        })
      },
      {
        name: "Voxel Revolution",
        artist: "Kevin MacLeod",
        index: 3,
        howl: new Howl({
          src: ["./assets/MP3_Files/VoxelRevolution.mp3"],
          html5: true
        })
      },
      {
        name: "Almost New",
        artist: "Kevin MacLeod",
        index: 4,
        howl: new Howl({
          src: ["./assets/MP3_Files/AlmostNew.mp3"],
          html5: true
        })
      },
      {
        name: "Lotus",
        artist: "Kevin MacLeod",
        index: 5,
        howl: new Howl({
          src: ["./assets/MP3_Files/Lotus.mp3"],
          html5: true
        })
      },
      {
        name: "Mystery Sax",
        artist: "Kevin MacLeod",
        index: 6,
        howl: new Howl({
          src: ["./assets/MP3_Files/MysterySax.mp3"],
          html5: true
        })
      },
      {
        name: "Spirit of the Girl",
        artist: "Kevin MacLeod",
        index: 7,
        howl: new Howl({
          src: ["./assets/MP3_Files/SpiritOfTheGirl.mp3"],
          html5: true
        })
      },
      {
        name: "Android Sock Hop",
        artist: "Kevin MacLeod",
        index: 8,
        howl: new Howl({
          src: ["./assets/MP3_Files/AndroidSockHop.mp3"],
          html5: true
        })
      },
      {
        name: "Save As",
        artist: "Toby Lane",
        index: 9,
        howl: new Howl({
          src: ["./assets/MP3_Files/SaveAs.mp3"],
          html5: true
        })
      },
      {
        name: "Tech House Vibes",
        artist: "Alejandro Magan",
        index: 10,
        howl: new Howl({
          src: ["./assets/MP3_Files/Tech_House_Vibes.mp3"],
          html5: true
        })
      },
      {
        name: "Down",
        artist: "Toby Lane",
        index: 11,
        howl: new Howl({
          src: ["./assets/MP3_Files/Down.mp3"],
          html5: true
        })
      },
      {
        name: "Weeknds",
        artist: "DayFox",
        index: 12,
        howl: new Howl({
          src: ["./assets/MP3_Files/Weeknds.mp3"],
          html5: true
        })
      },
      {
        name: "Lifelike",
        artist: "AlexiAction",
        index: 13,
        howl: new Howl({
          src: ["./assets/MP3_Files/Lifelike.mp3"],
          html5: true
        })
      },
      {
        name: "Lofi Study",
        artist: "FASSounds",
        index: 14,
        howl: new Howl({
          src: ["./assets/MP3_Files/LofiStudy.mp3"],
          html5: true
        })
      },
      {
        name: "Coding Night",
        artist: "FASSounds",
        index: 15,
        howl: new Howl({
          src: ["./assets/MP3_Files/CodingNight.mp3"],
          html5: true
        })
      },

    ]

  play(index: number) {
    if (!this.song[index].howl.playing()) {
      this.song[index].howl.play();
      this.songsIndex = index;
      this.songName = this.song[index].name
      this.songArtist = this.song[index].artist
    }
  }

  pause(index: number) {
    this.song[index].howl.pause();
    this.songsIndex = index;
  }

  stop(index: number) {

    this.song[index].howl.stop();
    this.songName = "";
    this.songArtist = "";
  }

  skip() {
    this.songName = ""
    this.songArtist = "";
    this.song[this.songsIndex].howl.stop();
    if (this.songsIndex == 15) {
      this.songsIndex = 0;
      this.songName = ""
      this.songArtist = "";
    } else {
      this.songsIndex++
      this.songName = ""
      this.songArtist = "";
    }
  }

  prev() {
    this.songName = ""
    this.songArtist = "";
    this.song[this.songsIndex].howl.stop();
    if (this.songsIndex == 0) {
      this.songsIndex = 15
      this.songName = ""
      this.songArtist = "";
    } else {
      this.songsIndex--;

    }

  }
}

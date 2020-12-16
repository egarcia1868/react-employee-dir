import React, {Component} from "react";
import Table from "../Table";


class Directory extends Component {
  state ={
    //fullList is a placeholder.  Will use full db list once everything is functioning
    fullList: [{
      "id": "6",
      "name": "Absorbing Man",
      "powerstats": {
        "intelligence": "38",
        "strength": "80",
        "speed": "25",
        "durability": "100",
        "power": "98",
        "combat": "64"
      },
      "biography": {
        "full-name": "Carl Creel",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Greithoth",
          "\"Crusher\" Creel",
          "Rocky Davis",
          "Dynamite Davis",
          "Lightningbolt",
          "Prisoner #24957"
        ],
        "place-of-birth": "New York City, New York",
        "first-appearance": "Daredevil #1 (April, 1964) (As Rocky Davis)",
        "publisher": "Marvel Comics",
        "alignment": "bad"
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'4",
          "193 cm"
        ],
        "weight": [
          "270 lb",
          "122 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "No Hair"
      },
      "work": {
        "occupation": "Professional criminal; former professional boxer",
        "base": "-"
      },
      "connections": {
        "group-affiliation": "Masters of Evil, Lethal Legion; formerly Worthy, Frightful Four: former agent of Loki and They Who Wield Power",
        "relatives": "Mary MacPherran (Titania) (wife); Jerry Sledge (son); Rockwell \"Rocky\" Davis (Hi-Llite) (cousin)"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/1448.jpg"
      }
    },
    {
      "id": "28",
      "name": "Animal Man",
      "powerstats": {
        "intelligence": "56",
        "strength": "48",
        "speed": "47",
        "durability": "85",
        "power": "73",
        "combat": "80"
      },
      "biography": {
        "full-name": "Bernhard Baker",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "The Human Zoo; A-Man; The Man with Animal Powers"
        ],
        "place-of-birth": "-",
        "first-appearance": "Strange Adventures #180 (September, 1965)",
        "publisher": "DC Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "185 lb",
          "83 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Blond"
      },
      "work": {
        "occupation": "-",
        "base": "San Diego, California"
      },
      "connections": {
        "group-affiliation": "Formerly Animal Masters, Forgotten Heroes, Justice League of America, Justice League Europe",
        "relatives": "Ellen Frazier (wife), Cliff Baker (son), Maxine Baker (daughter), unnamed second daughter, Frank Baker, Jr. (father), Phyllis Baker (mother), unnamed sister, Frank, Sr (grandfather), Teddy (great grandfather), Sherman (great-great grandfather), Jack (great-great-great grandfather), Mary Frazier (mother-in-law), Dudley (uncle-in-law), Annie Cassidy (mother of second daughter), Lucy Cassidy (half-sister of second daughter)"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/632.jpg"
      }
    },
    {
      "id": "30",
      "name": "Ant-Man",
      "powerstats": {
        "intelligence": "100",
        "strength": "18",
        "speed": "23",
        "durability": "28",
        "power": "32",
        "combat": "32"
      },
      "biography": {
        "full-name": "Hank Pym",
        "alter-egos": "Giant-Man, Goliath, Wasp II, Yellowjacket",
        "aliases": [
          "Hank Pym",
          "Doctor Pym",
          "Ant-Man",
          "Goliath",
          "Yellowjacket",
          "Wasp",
          "Earth's Scientist Supreme"
        ],
        "place-of-birth": "Elmsford, New York",
        "first-appearance": "Tales to Astonish #27 (January, 1962) (as Hank Pym)  Tales to Astonish #35 (September, 1962) (as Ant-Man)",
        "publisher": "Giant-Man",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'11",
          "211 cm"
        ],
        "weight": [
          "270 lb",
          "122 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Blond"
      },
      "work": {
        "occupation": "Adventurer, Biochemist, former manager of Avengers Compound",
        "base": "Avengers Compound, Los Angeles; formerly Infinite Avengers Mansion; Captive aboard a Skrull ship; Avengers Mansion, New York City, New York"
      },
      "connections": {
        "group-affiliation": "Avengers Academy, Secret Avengers; formerly Mighty Avengers, Avengers (founding member), Defenders, Future Iron Man's Team",
        "relatives": "-"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/857.jpg"
      }
    },
    {
      "id": "31",
      "name": "Ant-Man II",
      "powerstats": {
        "intelligence": "75",
        "strength": "18",
        "speed": "17",
        "durability": "40",
        "power": "53",
        "combat": "30"
      },
      "biography": {
        "full-name": "Scott Lang",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Myrmidon",
          "Scott Edward Harris Lang"
        ],
        "place-of-birth": "Coral Gables, Florida",
        "first-appearance": "Avengers Vol 1 #181 (March, 1979)",
        "publisher": "Marvel Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'0",
          "183 cm"
        ],
        "weight": [
          "190 lb",
          "86 kg"
        ],
        "eye-color": "Blue",
        "hair-color": "Blond"
      },
      "work": {
        "occupation": "Electronics Technician,",
        "base": "South Beach, Miami, Florida; formerly Farmingdale, Long Island, New York"
      },
      "connections": {
        "group-affiliation": "Ant-Man Security Solutions; formerly Future Foundation (leader), Fantastic Four (leader), Defenders, Avengers, Heroes For Hire, Stark Industries",
        "relatives": "Cassandra Eleanor Lang (daughter), Ruth (sister), Carl (brother-in-law), Peggy Rae (ex-wife)"
      },
      "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/166.jpg"
      }
    }],
    filteredList: []
  }

  // tableRowCreater = () => {
    
  // }

  render() {
    return (
      <div>
        <h1>
          Welcomd to Seek-a-Supe!
        </h1>
        <h2>
          Got a super problem that needs to be dealt with?  Search our database of super heroes (and villians if the task is a little on the shady side) and find someone better suited to handle it:
        </h2>
        {/* input field here */}
        <Table 
        filteredList={this.state.filteredList}
        fullList={this.state.fullList}
        tableRowCreater={this.tableRowCreater}
        />
      </div>
    )
  }

}

export default Directory;
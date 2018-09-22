import React, { Component } from "react";
import flowers from "./flowers.json";
import Wrapper from "./components/Wrapper";
import Navpills from "./components/Navpills";
import Title from "./components/Title";
import FlowerCard from "./components/FlowerCard";

class App extends Component {
  state = {
    message: "Click an image to begin!",
    topScore: 0,
    curScore: 0,
    flowers: flowers,
    unselectedFlowers: flowers
  };

  componentDidMount() {}

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  selectFlower = breed => {
    const findFlower = this.state.unselectedFlowers.find(
      item => item.breed === breed
    );

    if (findFlower === undefined) {
      // failure to select a new flower
      this.setState({
        message: "You guessed incorrectly!",
        topScore:
          this.state.curScore > this.state.topScore
            ? this.state.curScore
            : this.state.topScore,
        curScore: 0,
        flowers: flowers,
        unselectedFlowers: flowers
      });
    } else {
      // success to select a new flower
      const newFlowers = this.state.unselectedFlowers.filter(
        item => item.breed !== breed
      );

      this.setState({
        message: "You guessed correctly!",
        curScore: this.state.curScore + 1,
        flowers: flowers,
        unselectedFlowers: newFlowers
      });
    }

    this.shuffleArray(flowers);
  };

  render() {
    return (
      <Wrapper>
        <Navpills
          message={this.state.message}
          curScore={this.state.curScore}
          topScore={this.state.topScore}
        />
        <Title />
        {this.state.flowers.map(flower => (
          <FlowerCard
            breed={flower.breed}
            image={flower.image}
            selectFlower={this.selectFlower}
            curScore={this.state.curScore}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

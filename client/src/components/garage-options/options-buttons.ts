import { Component } from '../../utils/component';
import { WEBUIButton } from '../web-ui/button/button';

export class OptionsBtns extends Component {
  btnRace: WEBUIButton;
  btnReset: WEBUIButton;
  btnGenerateCars: WEBUIButton;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['garage-buttons']);
    this.btnRace = new WEBUIButton(
      this.element,
      ['garage-race-button'],
      'race',
    );
    this.btnRace.onClickButton = () => this.startRaceAllCars();
    this.btnReset = new WEBUIButton(
      this.element,
      ['garage-reset-button'],
      'reset',
      true,
    );
    this.btnReset.onClickButton = () => this.resetAllCars();
    this.btnGenerateCars = new WEBUIButton(
      this.element,
      ['garage-generate-button'],
      'generate cars',
    );
    this.btnGenerateCars.onClickButton = () => this.generateCars();
  }

  startRaceAllCars: () => void = () => {};
  resetAllCars: () => void = () => {};
  generateCars: () => void = () => {};
}

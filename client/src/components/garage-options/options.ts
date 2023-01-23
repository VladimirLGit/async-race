import './index.scss';
import { Component } from '../../utils/component';
import { OptionsBtns } from './options-buttons';
import { OptionsInputs } from './options-inputs';
import { ICar, ICreateCar, IUpdateCar } from '../../interfaces/index';

export class GarageOptions extends Component {
  updateInputs: OptionsInputs;
  optionsButtons: OptionsBtns;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['garage-options']);
    const createInputs = new OptionsInputs(this.element, 'create', [
      'garage-create-inputs',
    ]);
    createInputs.createCar = (state) => this.createCar(state);
    this.updateInputs = new OptionsInputs(this.element, 'update', [
      'garage-update-inputs',
    ]);
    this.updateInputs.createCar = () => {
      this.updateCar(this.updateInputs.state);
    };
    this.optionsButtons = new OptionsBtns(this.element);
    this.optionsButtons.startRaceAllCars = () => this.startRaceAllCars();
    this.optionsButtons.resetAllCars = () => this.resetAllCars();
    this.optionsButtons.generateCars = () => this.generateCars();
  }

  startRaceAllCars: () => void = () => {};
  resetAllCars: () => void = () => {};
  generateCars: () => void = () => {};
  createCar: (state: ICreateCar) => void = () => {};
  updateCar: (car: IUpdateCar) => void = () => {};

  updateState(car: ICar): void {
    this.updateInputs.state = car;
    this.updateInputs.updateInputs();
  }
}

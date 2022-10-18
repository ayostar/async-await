import read from './reader';
import json from './parser';
import GameSaving from './game_saving';

export default class GameSavingLoader {
  static async load() {
    const savingData = await json(await read());
    const result = JSON.parse(savingData);
    return new GameSaving(result);
  }
}

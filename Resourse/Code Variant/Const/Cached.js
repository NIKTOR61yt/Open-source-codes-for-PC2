import { Spawns, Ui, GameMode, Properties, Timers, Damage } from 'pixel_combats/room';

/*
    Для того, чтобы не дублировать строки кэшируем глобальные контексты.
*/
export const cachedSpawns = Spawns.GetContext();
export const cachedUi = Ui.GetContext();
export const cachedGM = GameMode.Parameters;
export const cachedProp = Properties.GetContext();
export const cachedTimers = Timers.GetContext();
export const cachedDmg = Damage.GetContext();

/*
    Можно попробовать и другой вариант, кому как удобнее.
    Более читаемый.

    export const CACHED = {
        cachedSpawns: Spawns.GetContext(),
        cachedUi: Ui.GetContext(),
        cachedGM: GameMode.Parameters,
        cachedProp: Properties.GetContext(),
        cachedTimers: Timers.GetContext(),
        cachedDmg: Damage.GetContext()
    }
*/

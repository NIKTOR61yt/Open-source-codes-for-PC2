import { Color } from 'pixel_combats/basic';
import { Teams, Spawns } from 'pixel_combats/room';
import { RGB } from '../Utils/RGB.js';
import { cachedSpawns } from '../Const/Cached.js';

/*
    Создаем команду применяя RGB палитру из папки Utils.
    Все цвета можно узнать в интернете, в данном случае Горечавково-синий (14, 41, 75).
*/
Teams.Add('Players', 'Игроки', RGB(14, 41, 75));
/// Кэшируем по желанию
export const playersTeam = Teams.Get('Players');
/// Назначаем спавны для планируемого местоположения. Поможет с спавном в OnLoad.js
cachedSpawns.Spawns.SpawnPointsGroups.Add(1);
playersTeam.Spawns.SpawnPointsGroups.Add(1);
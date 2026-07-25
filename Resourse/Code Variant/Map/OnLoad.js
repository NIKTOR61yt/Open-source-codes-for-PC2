import { Color } from 'pixel_combats/basic';
import { Map, Players, Timers } from 'pixel_combats/room';
import { RGB } from '../Utils/RGB.js';
import { cachedSpawns } from '../Const/Cached.js';
import { playersTeam } from '../Teams/AddTeams.js';


/* 
    Когда карта загружается взаимодействуем с игроком.
    Можно использовать чтобы добавлять игрока в команду.
    Если используете для спавна игроков всегда назнайте спавн вне контекста так игрок будет на спавне,
    а не на случайной крайней точке карты.
    Подробнее в AddTeams.js
*/
Map.OnLoad.Add(function(){
    for (const player of Players){ /// Если нужно обработать всех Players.All
        /// Кэшируем по желанию.
        const playerProp = player.Properties;

        if (player.Team === null){
            playersTeam.Add(player);
            player.Spawns.Spawn;

            /// К примеру даём временный айди - комнатный.
            playerProp.Get('RoomId').Value = player.IdInRoom;
        }
    }
});

/*
    Это был первый способ добавления игрока в команду, другой можно
    узнать в папке Timers.
*/
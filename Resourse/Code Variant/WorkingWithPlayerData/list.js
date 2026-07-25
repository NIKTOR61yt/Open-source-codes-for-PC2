import { Players } from 'pixel_combats/room';

/*
    Если вам понадобился изменяемый список игроков.
    Собирает всех в одном сообщении, рекомендую использовать PopUp
*/
export function list(){
    let listOfPlayers = 'Игроки на сервере:\n\n';
    for (const player of Players.All){
        listOfPlayers += `Id: ${player.Id} | RoomId: ${player.IdInRoom} | NickName: ${player.NickName}.\n`
    }
}
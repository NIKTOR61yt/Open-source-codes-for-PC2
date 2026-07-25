import { Vector3 } from 'pixel_combats/basic';

/*
    Задаём определённую точку игрока.
*/
function setCord(player){
    /// Кэшируем по желанию.
    /// Если надо использовать координаты игрока.
    const playerPos = player.PositionIndex;
    const playerRot = player.Rotation;

    /*
        Если потребуется обновить игрока не отправляя на спавн можно использовать его позицию и спавн.
        Вместо playerPos и playerRot можно писать любые цифры и использовать Spawn() не обязательно.
    */
    player.Spawns.Spawn();
    player.SetPositionAndRotation(
        new Vector3(playerPos.x, playerPos.y, playerPos.z),
        new Vector3(playerRot.x, playerRot.y, playerRot.z)
    );
}
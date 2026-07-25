/// Пустой инвентарь
export function clearInv(player){
    const playerInv = player.inventory;

    playerInv.Main.Value = false;
    playerInv.Secondary.Value = false;
    playerInv.Melee.Value = false;
    playerInv.Explosive.Value = false;
    playerInv.Build.Value = false;
    
    /// Опционально.
    /// playerInv.MainInfinity.Value = false;
    /// playerInv.SecondaryInfinity.Value = false;
    /// playerInv.ExplosiveInfinity.Value = false;
    /// playerInv.BuildInfinity.Value = false;
}
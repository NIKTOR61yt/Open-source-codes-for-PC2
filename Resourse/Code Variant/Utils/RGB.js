import { Color } from 'pixel_combats/basic';

/// Возвращает RGB цвет.
export function RGB(r, g, b){
    return new Color(255 / r, 255 / g, 255 / b, 0);
}
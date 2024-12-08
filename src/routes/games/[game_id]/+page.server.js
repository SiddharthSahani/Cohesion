import { getGame } from '$lib/server/redis';
import { incrementPlayCount, incrementWinCount } from '$lib/server/redis';
export const load = async ({ params }) => {
    try {
        // Fetch game details from Redis
        const game = await getGame(params.game_id);

        return {
            game_id: params.game_id,
            board_title: game.title,
            clusters: game.clusters,
            isValid: true
        };
    } catch (error) {
        console.error('Error fetching game:', error);
        return {
            game_id: params.game_id,
            isValid: false
        };
    }
};

import { ConfigService } from './config.service';
export declare class ConfigController {
    private readonly configService;
    constructor(configService: ConfigService);
    getPrices(): Promise<Record<string, number>>;
    updatePrices(body: {
        desayuno?: number;
        almuerzo?: number;
        cena?: number;
    }): Promise<Record<string, number>>;
}

import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'Todos os animais disponíveis para adoção',
            background: 'allanimals.jpg'
        }
    });
};

export const dogs = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'Todos os cachorros disponíveis para adoção',
            background: 'banner_dog.jpg'
        }
    });
}

export const cats = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'Todos os gatos disponíveis para adoção',
            background: 'banner_cat.jpg'
        }
    });
}

export const fishes = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'Todos os peixes disponíveis para adoção',
            background: 'banner_fish.jpg'
        }
    });
}
import { Request, Response } from "express";

import {createMenuObject} from '../helpers/createMenuObjects';
import {Pet} from '../models/pets';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais disponíveis para adoção',
            background: 'allanimals.jpg',
        }, 
        list
    });
};

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog'); 

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Todos os cachorros disponíveis para adoção',
            background: 'banner_dog.jpg', 
        },
        list
    });
}

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');

    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Todos os gatos disponíveis para adoção',
            background: 'banner_cat.jpg',
        },
        list
    });
}

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');

    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Todos os peixes disponíveis para adoção',
            background: 'banner_fish.jpg',
        }, 
        list
    });
}
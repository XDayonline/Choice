# Choice


<p align="center">
<a style="justify-content: center" href="http://choicegianni.herokuapp.com/"><img src="https://img.icons8.com/plasticine/2x/survey.png" title="Choice" alt="Choice"></a>
</p>
<p align="center">
<a href="http://choicegianni.herokuapp.com/"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="http://choicegianni.herokuapp.com/"><img src="https://img.shields.io/badge/stable-v1-blue" alt="Latest Stable Version"></a>
<a href="https://http://choicegianni.herokuapp.com/"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

Choice is a mobile web survey application built with Laravel and VueJS.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The ArtG Back website requires a server with PHP 7.2.5+.

The database engine that is used to store data for this application could be any of the engines supported by Laravel: MySQL, Postgres, SQLite and SQL Server.

You have to install Composer

Download Laravel using Composer:

```
composer global require laravel/installer
```

### Installing

First of all, Git Clone this project

cd into the directory of this project and run the following commands:
```
composer install
```
Configure the database settings in `app/config/database.php`
And migrate the database with:
```
php artisan migrate
php artisan db:seed
php artisan serve
```
This will install all Composer dependencies, create the database structure and populate the database with some sample data so that you could see this project in action.

You can access to the app by http://127.0.0.1:8000/ .

## API

Here are the routes to have the data from my API :

* GET QUESTIONS (Avoir toutes les questions) :
http://choicegianni.herokuapp.com/api/v1/question

* GET QUESTION BY ID (Avoir une question avec l'id) :
http://choicegianni.herokuapp.com/api/v1/question/(id)

* POST QUESTION (Ajouter une question) :
http://choicegianni.herokuapp.com/api/v1/question

* GET ANSWERS (Avoir toutes les réponses:
http://choicegianni.herokuapp.com/api/v1/answer

* GET ANSWER BY ID (Avoir une réponse avec l'id) :
http://choicegianni.herokuapp.com/api/v1/answer/(id)

* POST ANSWER (Ajouter une réponse) :
http://choicegianni.herokuapp.com/api/v1/answer

* POST RESULT (Avoir les résultats d'une question en rentrant "question_id" dans le formulaire) :
http://choicegianni.herokuapp.com/api/v1/answer/result

## Deployment

I used [Heroku](https://www.heroku.com/) to deploy our project.

## Demo

You can access to my web site to http://choicegianni.herokuapp.com/ .

## Built With

* [Laravel](https://laravel.com/) - The PHP framework used


## Official Documentation

Documentation for the entire framework can be found on the [Laravel website](http://laravel.com/docs).

## Versioning

I used [GitKraken](https://www.gitkraken.com/b) and [Git](https://git-scm.com/) for versioning.

## Author

<a href="https://github.com/XDayonline" target="_blank">**Gianni Scantamburlo**</a> 

[![FVCproductions](https://avatars0.githubusercontent.com/u/32893447?&s=200)](https://github.com/XDayonline)
    
<a href="http://github.com/fvcproductions" target="_blank">`https://github.com/XDayonline`</a> 

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © Gianni Scantamburlo

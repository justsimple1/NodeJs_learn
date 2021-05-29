# NodeJs_learn
Node JS - Быстрый Курс за 1 час

## Содержание [Node JS learn](README.md#nodejs)

[1. Инициализируем проект](#1-Инициализируем-проект)

[2. Подключение исполняемых файлов](#2-Подключение-исполняемых-файлов)

# 1. Инициализируем проект
Инициализируем наш проект с помощью команды "**npm init**",  после выполнения которой создаётся файл "package.json" :
<div style="width: 100%; text-align: center;"><img src="https://st.storeland.ru/7/2727/596/nodeJs_1.jpg" width="320" style="margin:auto; display: block;" alt="Nest Logo" />
</div>
  <br>
<p>package.json - файл в котором указываются конгфируционые настройки, т.е. зависимости "пакетов" используемые в проекте, команды используемые в проекте и другая информация о проекте.<br>При выполнении команды:</p><b>"**npm install**"</b><p> , все модули (указанные в файле package.json) устанавливаются в директорию node_modules той директории, откуда была вызвана команда.
</p>

# 2. Подключение исполняемых файлов
<p>Для подключения исполняемых файлов, модулей используется функция <b>"require()"</b>, значение которой передаётся в переменную, через которую(переменную) происходит работа с файлом, модулем. В качестве примера подключим модуль "path", для работы с файловой системой :</p>
<div style="width: 100%; text-align: center;">
<img src="https://st.storeland.ru/7/2727/597/nodeJs_2.jpg" width="320" style="margin:auto; display: block;" alt="Nest Logo" />
</div>

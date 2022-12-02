import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';

export default function Description() {
    return (
        <Container className={"Description mb-4 px-4"}>

            <h1>Прогнозирование размеров сварного шва при электронно-лучевой сварке тонкостенных конструкций
                аэрокосмического
                назначения</h1>
            <p>
                В качестве исходных данных были взяты результаты экспериментальных исследований, проводимых в целях
                улучшения технологического процесса электронно-лучевой сварки изделия, сборка которого состоит из
                элементов,
                состоящих из разнородного материала. Установка электронно-лучевой сварки, на которой проводились
                исследования, предназначена для сварки электронным лучом в глубоком вакууме деталей сборочных единиц из
                нержавеющих сталей, титановых, алюминиевых и специальных сплавов. Существующая установка
                электронно-лучевой
                сварки обеспечивает повторяемость режимов в рамках возможностей реализованной системы управления. Работы
                по
                сварке выполнялись на образцах-имитаторах, соответствующих технологическому изделию. Для уменьшения
                вложения
                энергии при сварке:
            </p>
            <ol>
                <li>Снижалась величина сварочного тока (IW);</li>
                <li>Увеличивался ток фокусировки электронного пучка (IF);</li>
                <li>Увеличивалась скорость сварки (VW);</li>
                <li>Менялось расстояние от поверхности образцов до электронно-оптической системы (FP).</li>
            </ol>
            <p>По совокупности параметров технологических режимов обеспечивались минимально возможные размеры сварных
                швов: глубина шва (Depth) и ширина шва (Width).
            </p>
            <p>

                В процессе выполнения работ была произведена электронно-лучевая сварка 18-ти единиц образцов.
                Результаты
                металлографического контроля по размерам сварного шва для каждого образца проводились в 4-х
                поперечных
                сечениях сварного шва. Ускоряющее напряжение было постоянным в диапазоне 19,8 – 20 кВ. Набор
                полученных
                данных собраны в составе режимов сварки, размеров сварочных швов в поперечных сечениях всех
                образцов.
            </p>
            <h5>
                Требуется: провести прогнозирование глубины (Depth) и ширины (Width) сварного шва в зависимости от
                параметров технологического процесса (IW, IF, VW, FP).
            </h5>
        </Container>
    )

}
(function() {
    'use strict';

    angular
        .module('quizApp')
        .service('QuizService', QuizService);

    function QuizService() {
        var questions = [
            {
                text: 'What is encapsulation in object-oriented programming?',
                options: ['Hiding implementation details', 'Using inheritance', 'Creating objects', 'Establishing relationships between classes'],
                correctAnswer: 'Hiding implementation details'
            },
            {
                text: 'Which of the following best defines polymorphism?',
                options: ['Using the same method name with different signatures', 'Hiding implementation details', 'Inheriting properties from another class', 'Creating abstract classes'],
                correctAnswer: 'Using the same method name with different signatures'
            },
            {
                text: 'What is the main advantage of using inheritance?',
                options: ['Code reusability', 'Encapsulation', 'Polymorphism', 'None of the above'],
                correctAnswer: 'Code reusability'
            },
            {
                text: 'Which of the following is an example of an abstract class in Java?',
                options: ['class MyClass', 'interface MyInterface', 'abstract class MyAbstractClass', 'enum MyEnum'],
                correctAnswer: 'abstract class MyAbstractClass'
            },
            {
                text: 'What does "SOLID" stand for in object-oriented design?',
                options: ['Simple, Open, Linked, Identified, Detailed', 'Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion', 'Structure, Object, Layer, Implementation, Design', 'None of the above'],
                correctAnswer: 'Single responsibility, Open/closed, Liskov substitution, Interface segregation, Dependency inversion'
            }
        ];

        this.getQuestions = function() {
            return questions;
        };
    }
})();

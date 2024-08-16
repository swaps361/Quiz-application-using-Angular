(function() {
    'use strict';

    angular
        .module('quizApp')
        .controller('QuizController', QuizController);

    QuizController.$inject = ['QuizService'];

    function QuizController(QuizService) {
        var vm = this;

        vm.questions = QuizService.getQuestions();
        vm.score = 0;
        vm.showResult = false;

        vm.submitQuiz = function() {
            vm.score = 0;
            vm.questions.forEach(function(question) {
                if (question.selectedOption === question.correctAnswer) {
                    vm.score++;
                }
            });
            vm.showResult = true;
        };
    }
})();

import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';

describe("landing view", () => {
    beforeEach(() => {
        render(<App />);
    });
    afterEach(() => cleanup());

    it("should contain button as tabbed button with text `Pomodoro`", () => {
        expect(document.getElementById("btn-pd-timer").innerHTML).toContain("Pomodoro");
    })

    it("should contain button as tabbed button with text `Short Break`", () => {
        expect(document.getElementById("btn-sb-timer").innerHTML).toContain("Short Break");
    })

    it("should display 25:00 as time left", () => {
        expect(document.getElementById("timer").innerHTML).toContain("25:00");
    });

    it("should contain button with text `start` to start Pomodoro", () => {
        expect(document.getElementById("btn-start-timer").innerHTML).toContain("start");
    });

    it("should display message with text `Time to Work!`", () => {
        expect(document.getElementById("message").innerHTML).toContain("Time to Work!");
    });

});

describe("When Pomodoro is started ", () => {

    beforeEach(() => {
        render(<App />);
        document.getElementById("btn-start-timer").click();
    });

    afterEach(() => cleanup());

    it("stop button should be displayed to pause Pomodoro", () => {
        expect(document.getElementById("btn-stop-timer").innerHTML).toContain("stop");
    });

    it("end button should be displayed to switch to Short Break", () => {
        expect(document.getElementById("btn-end-timer").innerHTML).toContain("end");
    })
});

describe("When Pomodoro is stopped ", () => {
    beforeEach(() => {
        render(<App />);
        document.getElementById("btn-start-timer").click();
        document.getElementById("btn-stop-timer").click();
    });

    afterEach(() => cleanup());

    it("should contain button with text `start` to resume Pomodoro", () => {
        expect(document.getElementById("btn-start-timer").innerHTML).toContain("start");
    });

});

describe("When Pomodoro is ended ", () => {
    beforeEach(() => {
        render(<App />);
        document.getElementById("btn-start-timer").click();
        document.getElementById("btn-end-timer").click();
    });

    afterEach(() => cleanup());

    it("button with text `start` should be displayed to start Short Break", () => {
        expect(document.getElementById("btn-start-timer").innerHTML).toContain("start");
    });

    it("should display 5:00 as time left", () => {
        expect(document.getElementById("timer").innerHTML).toContain("5:00");
    });
    
    it("should display message with text `Time for Break!`", () => {
        expect(document.getElementById("message").innerHTML).toContain("Time for Break!");
    });
});

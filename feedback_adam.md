## Project Workflow

How effectively did you plan, execute, and present this project?

While this wasn't a formal criteria on the evaluation list, I wanted to add it
here because I had some feedback I thought might be helpful:

1. Overall, it looks like your group had a clear vision for your app, which is
great. The PDF with mockups are really nice!
2. Your trello board shows evidence of a lot of good practices (which you also
mentioned at your presentation) of things like scrumming.
3. While it may have been tough to do here due to the nature of your app,
I wanted to mention that it looks like a lot of your cards were task centric
rather than user-story-centric. This may work early on, but as your app grows,
it's good to focus on user stories as the units of development, and break those
into subtasks as needed.
4. There are some technical decisions that you guys made that aren't ideal, and
I suspect they may have stemmed from identifying subtasks too soon (i.e. the
fragmentation of the bus and weather endpoints when treating them as one
endpoint may have been more efficient).

## Technical Requirements

How well does your app demonstrate a grasp of the technologies introduced in class?

**Meets Expectations**

I'm marking this as meets expectations because while your app doesn't meet some
of the requirements, it exceeds them in others.

Areas of improvement:
* Only 1 BE model (creating a backend model for interfacing with the weather API
would clean up your controller code greatly)
* Doesn't pass [HTML validation](https://validator.w3.org/nu/?doc=https%3A%2F%2Fancient-peak-2424.herokuapp.com%2F)
* Doesn't pass [CSS validation](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fancient-peak-2424.herokuapp.com%2Fpublic%2Fstyles.css&profile=css3&usermedium=all&warning=1&vextwarning=&lang=en)

It was admirable however that you built an app that did a pretty complex job of
combining data from two APIs, and that produced a nice user experience.

## Creativity/Interface

How memorable and enjoyable to use is your app? (Also not a formal requirement,
but I wanted to give some feedback here as well).

**Exceeds expectations**

I really like how your team produced something that solves a real problem, and
your interface / UX is really nice! Great job here... I don't have a lot to add.

## Code Quality

**Meets expectations**

Overall, your code quality is really good at the small scale (i.e individual
lines and methods are well-written and make sense.) However, at the larger
scale, both your front-end and back-end code have lots of room for improvement.

Please see my in-line comments in this PR for more detail, but in general:
* You're not separating concerns between the models and the views in your front
end code.
* Your front end code has pretty good views, but the main JS file is a bit messy
* Your back end code also doesn't separate concerns well between the model and
the controllers. In other words, your back end should have something like a
weather model that handles making the HTTP request to the weather API, so that
your controller code can be as simple as possible.
* Your making 3 HTTP requests between your backend and frontend, when you could
and one is very large. This is more advanced, but I think you could refactor it
down to one HTTP request that gets all needed info for a given bus stop.

## Deployment and Functionality

How accessible is your app to those who may want to explore it?

**Exceeds expectations**

Great job! Your app is deployed and works very well without errors. My only
suggestion would be to use a custom heroku domain:
```bash
$ heroku rename traversed # assuming that name isn't taken on heroku
```

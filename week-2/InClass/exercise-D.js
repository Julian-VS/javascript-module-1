function MoodMeter (mood)
{
    if (mood == "happy")
    {
        return "happy";
    }
    else if (mood == "sad")
    {
        return "sad";
    }
    else if ((typeof mood) == "number")
    {
        return "Beep Beep Boop";
    }
    else
    {
        return "I'm so sorry, I'm still learning about feelings!";
    }
}

let MyMood = 2;
console.log(MoodMeter(MyMood));
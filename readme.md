# FUCK ADOBE PREMIERE PRO CAPTION
Transfer Caption to Graphic And Type
and get rid of Adobe's god da*n Caption limitations

# Insatall
## Locally
1. Download this Project [click here](https://github.com/bradly0cjw/FAPPC/archive/refs/heads/main.zip)<br>
2. Install node [here](https://nodejs.org/en/download/)<br>
3. Enter command in Terminator or Run ```install.bat``` in Project folder<br>
3.1 ```npm install -g http-server```<br>
4. run ```start.bat``` in Project folder<br>
## Web based
1. Just go [here](https://fappc.vercel.app/)
* You must download [this](https://github.com/bradly0cjw/FAPPC/releases) file (Base.xml) in order to use FAPPC function

# Usage
1. Select srt file you want to transcribe<br>
2. Select Base.xml provide in the folder
3. Download and Enjoy.

# limitations
* Currently only fully suport ASCII code
  * Unicode only support marking timestamp <br>You need to type text manauly
  <br>( You still can do it in efficient way by <br>
  Go to Graphics and Titles-->Text-->Graphics ) Just copy and paste
* Blank line in srt may cause bugs (Except Auto Generate blank line)
  * If you need blank line in your caption use space instead
  * If you accidently fuck up your SRT file or the project show ```Check SRT file``` 
  <br>Export SRT file from Premiere Pro and try again

# TODO
Support Unicode<br>
new way to parse Xml file<br>

# This Project Contain
fast-srt-subtitle<br>
FAPPC<br>
<br>
fast-srt-subtitle is base on
[wiwikuan/fast-srt-subtitle](https://github.com/wiwikuan/fast-srt-subtitle)

# fast-srt-subtitle
Make SRT Caption Fast!!!! This is a fast and dirty javascript SRT caption tool.

* Controls:
  * K: Timestamp this line's end time & next line's start time 
  * L: Timestamp this line's end time
  * I: Scroll back one line 
  * O: Scroll forward one line
  * U: Rewind 2 seconds
  * P: Forward 2 seconds
  * Q: Make SRT File
  * W: Play/Pause

Enjoy.

## Differ from original
* Add play/pause control
* show privious line in textarea

function preload(){
video.play("video.mp4")
}
function setup(){
canvas=CreateCanvas(480,380)

}
function draw(){
image(video,0,0,480,380)
video.loop()
video.volume(0)
video.speed(1)
}
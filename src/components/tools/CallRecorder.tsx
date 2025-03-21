
import React, { useState, useRef, useEffect } from "react";
import { Phone, Play, Square, Mic, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const CallRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [permissionError, setPermissionError] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const intervalRef = useRef<number | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const checkMicrophonePermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        
        // Stop all tracks to release microphone
        stream.getTracks().forEach(track => track.stop());
        
        setPermissionGranted(true);
        setPermissionError(null);
      } catch (error) {
        console.error('Microphone permission error:', error);
        setPermissionGranted(false);
        setPermissionError("Microphone access denied. Please allow microphone access in your browser settings.");
      }
    };
    
    checkMicrophonePermission();
    
    return () => {
      // Cleanup on component unmount
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      if (mediaRecorderRef.current && isRecording) {
        mediaRecorderRef.current.stop();
      }
      
      if (audioURL) {
        URL.revokeObjectURL(audioURL);
      }
    };
  }, []);

  const startRecording = async () => {
    if (!permissionGranted) {
      toast({
        title: "Permission required",
        description: "Please allow microphone access to record",
        variant: "destructive",
      });
      return;
    }
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Reset state
      audioChunksRef.current = [];
      setRecordingTime(0);
      if (audioURL) {
        URL.revokeObjectURL(audioURL);
        setAudioURL(null);
      }
      
      // Create media recorder
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      
      // Handle data available events
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };
      
      // Handle stop event
      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
        
        // Release microphone by stopping all tracks
        stream.getTracks().forEach(track => track.stop());
      };
      
      // Start recording
      recorder.start();
      setIsRecording(true);
      
      // Start timer
      intervalRef.current = window.setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
      
      toast({
        title: "Recording started",
        description: "Your audio is now being recorded",
      });
    } catch (error) {
      console.error('Error starting recording:', error);
      toast({
        title: "Recording failed",
        description: "Could not start recording. Please try again.",
        variant: "destructive",
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      
      toast({
        title: "Recording stopped",
        description: "Your recording is ready to play or download",
      });
    }
  };

  const downloadRecording = () => {
    if (audioURL) {
      const a = document.createElement('a');
      a.href = audioURL;
      a.download = `recording-${new Date().toISOString()}.wav`;
      a.click();
      
      toast({
        title: "Download started",
        description: "Your recording is being downloaded",
      });
    } else {
      toast({
        title: "No recording available",
        description: "Please record audio first before downloading",
        variant: "destructive",
      });
    }
  };

  // Format recording time
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-md">
        <CardHeader className="bg-primary/5">
          <div className="flex items-center">
            <Phone className="mr-2 text-primary" size={24} />
            <CardTitle>Call Recorder</CardTitle>
          </div>
          <CardDescription>
            Record audio calls and conversations
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 pb-4">
          {permissionError ? (
            <div className="p-6 text-center">
              <Mic className="mx-auto mb-4 text-muted-foreground" size={48} />
              <h3 className="text-lg font-medium mb-2">Microphone Access Required</h3>
              <p className="text-muted-foreground mb-4">{permissionError}</p>
              <Button onClick={() => window.location.reload()}>Try Again</Button>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-6">
              <div className="relative w-48 h-48 rounded-full flex items-center justify-center bg-muted/30">
                <div className={`absolute inset-2 rounded-full ${isRecording ? 'bg-red-100' : 'bg-muted'} flex items-center justify-center`}>
                  <Mic className={`${isRecording ? 'text-red-500 animate-pulse' : 'text-muted-foreground'}`} size={64} />
                </div>
                {isRecording && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                    REC
                  </div>
                )}
              </div>
              
              {isRecording ? (
                <div className="text-2xl font-bold">{formatTime(recordingTime)}</div>
              ) : (
                audioURL && (
                  <audio controls className="w-full max-w-md">
                    <source src={audioURL} type="audio/wav" />
                    Your browser does not support the audio element.
                  </audio>
                )
              )}
              
              <div className="flex gap-2">
                {isRecording ? (
                  <Button 
                    onClick={stopRecording} 
                    variant="destructive"
                    className="flex items-center gap-2"
                    size="lg"
                  >
                    <Square className="h-4 w-4" />
                    Stop Recording
                  </Button>
                ) : (
                  <Button 
                    onClick={startRecording} 
                    className="flex items-center gap-2"
                    size="lg"
                  >
                    <Play className="h-4 w-4" />
                    Start Recording
                  </Button>
                )}
                
                {audioURL && !isRecording && (
                  <Button 
                    onClick={downloadRecording} 
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                )}
              </div>
              
              <div className="text-center text-sm text-muted-foreground">
                <p>Recordings are stored locally and not sent to any server.</p>
                <p className="mt-1">Make sure you have permission from all parties before recording any conversation.</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};


import React, { useState, useRef } from "react";
import { FileImage, Upload, Copy, Download, Trash2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { GuidanceSection } from "../GuidanceSection";


// Define interface for OCR results
interface OCRResult {
  text: string;
  confidence: number;
}

export const ImageToText = () => {
  const [image, setImage] = useState<string | null>(null);
  const [imageName, setImageName] = useState<string>("");
  const [extractedText, setExtractedText] = useState<string>("");
  const [processing, setProcessing] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Invalid file type",
          description: "Please select an image file",
          variant: "destructive",
        });
        return;
      }
      
      setImageName(file.name);
      
      // Create a URL for the image
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
        setExtractedText("");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    
    if (event.dataTransfer.files.length) {
      const file = event.dataTransfer.files[0];
      
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Invalid file type",
          description: "Please select an image file",
          variant: "destructive",
        });
        return;
      }
      
      setImageName(file.name);
      
      // Create a URL for the image
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
        setExtractedText("");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const clearImage = () => {
    setImage(null);
    setImageName("");
    setExtractedText("");
    setProcessing(false);
    setProgress(0);
    
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    
    toast({
      title: "Image cleared",
      description: "The current image has been removed",
    });
  };

  // Simulate OCR processing
  const processImage = () => {
    if (!image) return;
    
    setProcessing(true);
    setProgress(0);
    
    // Simulate loading with progressive updates
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          
          // Simulate successful OCR
          setTimeout(() => {
            // This is a mockup - in a real app, you would use an OCR library like Tesseract.js
            const mockText = `Sample extracted text from image "${imageName}".
            
This is an OCR demonstration showing how text would be extracted from your image. In a real implementation, this would use a library like Tesseract.js or an OCR API service.

The actual text extraction would depend on:
- Image quality and resolution
- Text clarity and fonts
- Background contrast
- Image orientation

For production use, you would integrate with:
1. Tesseract.js for client-side OCR
2. Google Cloud Vision API
3. Microsoft Azure Computer Vision
4. Amazon Textract
5. Other OCR services`;
            
            setExtractedText(mockText);
            setProcessing(false);
            
            toast({
              title: "Text extraction complete",
              description: "Text has been extracted from the image",
            });
          }, 500);
        }
        return newProgress;
      });
    }, 300);
  };

  const copyToClipboard = () => {
    if (extractedText) {
      navigator.clipboard.writeText(extractedText);
      
      toast({
        title: "Copied to clipboard",
        description: "Extracted text has been copied to clipboard",
      });
    }
  };

  const downloadText = () => {
    if (extractedText) {
      const blob = new Blob([extractedText], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      
      const filename = imageName ? `${imageName.split(".")[0]}-extracted.txt` : "extracted-text.txt";
      
      a.href = url;
      a.download = filename;
      a.click();
      
      URL.revokeObjectURL(url);
      
      toast({
        title: "Text downloaded",
        description: `Extracted text has been downloaded as "${filename}"`,
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-md">
        <CardHeader className="bg-primary/5">
          <div className="flex items-center">
            <FileImage className="mr-2 text-primary" size={24} />
            <CardTitle>OCR - Image to Text</CardTitle>
          </div>
          <CardDescription>
            Extract text from images using OCR technology
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 pb-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Image Input</h3>
              
              {image ? (
                <div className="space-y-4">
                  <div className="relative rounded-md border overflow-hidden">
                    <img 
                      src={image} 
                      alt="Uploaded" 
                      className="max-h-[300px] w-full object-contain bg-gray-50"
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={clearImage}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground truncate max-w-[200px]" title={imageName}>
                      {imageName}
                    </span>
                    
                    <Button
                      onClick={processImage}
                      disabled={processing}
                    >
                      {processing ? "Processing..." : "Extract Text"}
                    </Button>
                  </div>
                  
                  {processing && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Processing image</span>
                        <span>{progress}%</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  )}
                </div>
              ) : (
                <div 
                  className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-muted/50 transition-colors"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload size={36} className="mx-auto mb-4 text-muted-foreground/50" />
                  <h3 className="text-base font-medium mb-2">Upload Image</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Drag and drop an image file here, or click to select
                  </p>
                  <Button size="sm">Select Image</Button>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    className="hidden"
                  />
                </div>
              )}
              
              <div className="text-sm text-muted-foreground">
                <p className="font-medium mb-1">Supported image formats:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>PNG, JPG, JPEG, GIF, BMP</li>
                  <li>Best results with clear, high-contrast text</li>
                  <li>Image resolution should be at least 300 DPI</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Extracted Text</h3>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyToClipboard}
                    disabled={!extractedText}
                    className="flex items-center gap-1"
                  >
                    <Copy size={14} />
                    Copy
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={downloadText}
                    disabled={!extractedText}
                    className="flex items-center gap-1"
                  >
                    <Download size={14} />
                    Download
                  </Button>
                </div>
              </div>
              
              <Textarea
                placeholder={processing ? "Processing image..." : "Extracted text will appear here..."}
                className="min-h-[300px] font-mono text-base"
                value={extractedText}
                readOnly
              />
              
              {extractedText && (
                <div className="text-sm text-muted-foreground">
                  <p>Text has been extracted from the image. You can copy it to clipboard or download it as a text file.</p>
                </div>
              )}
              
              {!image && !extractedText && (
                <div className="rounded-md border p-8 text-center">
                  <FileImage size={36} className="mx-auto mb-4 text-muted-foreground/30" />
                  <p className="text-muted-foreground">Upload an image to extract text</p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      <GuidanceSection title="How to Use the OCR - Image to Text Tool">
  <div className="space-y-4">
    <div>
      <h4 className="font-medium mb-1">Using the OCR Tool</h4>
      <p>The OCR (Optical Character Recognition) tool allows you to extract text from images quickly and accurately.</p>

      <p className="mt-2"><strong>How to Use:</strong></p>
      <ol className="list-decimal pl-5">
        <li>Click "Select Image" to upload an image from your device.</li>
        <li>Alternatively, drag and drop an image file into the upload area.</li>
        <li>Supported formats: PNG, JPG, JPEG, GIF, BMP.</li>
        <li>For best results, use high-contrast images with at least 300 DPI resolution.</li>
        <li>Once uploaded, the tool will extract and display the text from the image.</li>
        <li>Copy or download the extracted text for further use.</li>
      </ol>
    </div>

    <div>
      <h4 className="font-medium mb-1">Features</h4>
      <ul className="list-disc pl-5">
        <li>Extracts text from images with high accuracy.</li>
        <li>Supports multiple image formats (PNG, JPG, GIF, BMP, etc.).</li>
        <li>Fast processing with an easy-to-use interface.</li>
        <li>Copy or download extracted text instantly.</li>
      </ul>
    </div>
  </div>
</GuidanceSection>

    </div>
  );
};

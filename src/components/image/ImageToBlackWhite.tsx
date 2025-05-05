import React, { useRef, useState } from "react";
import { FileImage, Download, Trash2, Plus, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { GuidanceSection } from "../GuidanceSection";

export const ImageToBlackWhite = () => {
  const [images, setImages] = useState<Array<{ file: File; preview: string; converted: string }>>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const validImages = Array.from(files).filter(file =>
        file.type.startsWith("image/") // Check if the file is an image
      );

      if (validImages.length === 0) {
        toast({
          title: "Invalid format",
          description: "Please upload image files only",
          variant: "destructive"
        });
        return;
      }

      validImages.forEach(file => convertToBlackWhite(file));

      // Reset input
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const convertToBlackWhite = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);

        const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
        if (imageData) {
          const data = imageData.data;
          for (let i = 0; i < data.length; i += 4) {
            const gray = 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]; // Luminance formula
            data[i] = gray; // Red
            data[i + 1] = gray; // Green
            data[i + 2] = gray; // Blue
          }
          ctx?.putImageData(imageData, 0, 0);
          const blackWhiteUrl = canvas.toDataURL("image/png");

          setImages(prev => [
            ...prev,
            {
              file,
              preview: URL.createObjectURL(file),
              converted: blackWhiteUrl
            }
          ]);

          toast({
            title: "Image converted",
            description: `${file.name} converted to Black & White`
          });
        }
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      Array.from(files).forEach(file => {
        const validImage = file as File;
        if (validImage.type.startsWith("image/")) {
          convertToBlackWhite(validImage);
        }
      });
    }
  };

  const removeImage = (index: number) => {
    URL.revokeObjectURL(images[index].preview);
    setImages(images.filter((_, i) => i !== index));
  };

  const clearAll = () => {
    images.forEach(img => URL.revokeObjectURL(img.preview));
    setImages([]);
  };

  const downloadImage = (converted: string, name: string) => {
    const link = document.createElement("a");
    link.href = converted;
    link.download = name.replace(/\.(jpg|jpeg|png|gif)$/i, "_bw.png");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/all-conversions">All Convertors</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/image-convertors">Image Convertors</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Image to Black & White Converter</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-4xl mx-auto">
        <Card className="shadow-md">
          <CardHeader className="bg-primary/5">
            <div className="flex items-center">
              <FileImage className="mr-2 text-primary" size={24} />
              <CardTitle>Image to Black & White Converter</CardTitle>
            </div>
            <CardDescription>Convert your images to black and white</CardDescription>
          </CardHeader>

          <CardContent className="pt-6 pb-4 space-y-4">
            <div
              className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-muted/50 transition-colors"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => fileInputRef.current?.click()}
            >
              <FileImage size={48} className="mx-auto mb-4 text-muted-foreground/50" />
              <h3 className="text-lg font-medium mb-2">Add Images</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Drag and drop image files here, or click to select
              </p>
              <Button>
                <Plus size={16} className="mr-1" /> Select Images
              </Button>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                ref={fileInputRef}
                className="hidden"
              />
            </div>

            {images.length > 0 && (
              <>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{images.length} Converted</h3>
                  <Button variant="outline" size="sm" onClick={clearAll}>
                    <Trash2 size={16} className="mr-1" /> Clear All
                  </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {images.map((img, index) => (
                    <div key={index} className="relative group border rounded-md overflow-hidden">
                      <img
                        src={img.converted}
                        alt={`Converted ${index + 1}`}
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => window.open(img.converted, '_blank')}
                          className="h-8 w-8 text-white hover:bg-white/20"
                        >
                          <Eye size={16} />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => removeImage(index)}
                          className="h-8 w-8 text-white hover:bg-white/20"
                        >
                          <Trash2 size={16} />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => downloadImage(img.converted, img.file.name)}
                          className="h-8 w-8 text-white hover:bg-white/20"
                        >
                          <Download size={16} />
                        </Button>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-1 truncate">
                        {img.file.name.replace(/\.(jpg|jpeg|png|gif)$/i, "_bw.png")}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            <p className="text-sm text-muted-foreground">
              Tip: All images will be converted to black and white.
            </p>
          </CardContent>
        </Card>

        <GuidanceSection title="How to Use the Image to Black & White Converter">
          <div className="space-y-4">
            <p>Upload one or more image files and they will be converted to black and white. You can preview and download the converted files instantly.</p>
            <ul className="list-disc pl-5 text-sm">
              <li>All image formats are supported in this tool.</li>
              <li>You can add multiple files at once.</li>
              <li>Converted images will be saved in black and white (grayscale).</li>
              <li>Use the download button to save the converted images.</li>
            </ul>
          </div>
        </GuidanceSection>
      </div>
    </>
  );
};

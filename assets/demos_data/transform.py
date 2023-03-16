import os
import pdb
stop = pdb.set_trace

for dir in ["miniRETINA/sain/", "miniRETINA/DR/", "miniRETINA/ARMD/"]:
    for f in os.listdir(dir):
        if "png" in f:
            # os.system("ffmpeg -i {0} -preset ultrafast banana_transformed_{1}.jpg".format(f, f.split("_")[1].split(".")[0]))
            os.system("""ffmpeg -i {0} -vf "crop=ih:ih" {1}""".format(dir+f, dir+f.split(".")[0]+"_transformed.png"))
            os.system("ffmpeg -i {0} -vf scale=224:224 {1}".format(dir+f.split(".")[0]+"_transformed.png", dir+f.split(".")[0]+"_final.png"))
            os.system("remove *_transformed.png".format(dir))

    os.system("cd ../..")
    
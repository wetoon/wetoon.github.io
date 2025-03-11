# wetoon.github.io

## Remove Ubuntu From Window 11

เปิด `command prompt` ด้วยสิทธิ `Administrator`  และรันคำสั่ง `bcdedit /enum firmware`
```bash
C:\Windows\system32> bcdedit /enum firmware
```

หลังจากนั้นค้นหา `description` ที่มีค่าเท่ากับ `Ubuntu` และคัดลอก `identifier` ** หากไม่พบ ข้ามขั้นตอนการลบได้เลย **
```bash
Firmware Application (101fffff)
-------------------------------
identifier              {ff61f75e-fce9-11ef-952e-f34432bf129f}
path                    \EFI\ubuntu\shimx64.efi
description             Ubuntu
```

จากนั้นลบ `Firmware Application` ด้วยคำสั่ง `bcdedit /delete $identifier` ตัวอย่าง
```bash
C:\Windows\system32> bcdedit /delete {ff61f75e-fce9-11ef-952e-f34432bf129f}
```

จากนั้นใช้คำสั่ง `diskpart` เพื่อจัดการ `part`
```bash
C:\Windows\system32> diskpart
```

ค้นหา `disk` ทั้งหมดด้วยคำสั่ง `list disk`
```bash
DISKPART> list disk

  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online          465 GB  1024 KB        *
  Disk 1    Online          238 GB  1024 KB        *
```

เลือกไดร์ฟที่ลง window ด้วยคำสั่ง `select disk` ตามด้วยหมายเลข `Disk` ส่วนใหญ่จะเป็น `Disk` ที่ความจุไม่เยอะ หรือก็คือ `SSD`
```bash
DISKPART> select disk 1

  Disk 1 is now the selected disk.
```

ค้นหา `volume` ด้วยคำสั่ง `list vol`
```bash
DISKPART> list vol

  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     D                NTFS   Partition    465 GB  Healthy
  Volume 1     C                NTFS   Partition    237 GB  Healthy    Boot
  Volume 2                      FAT32  Partition    100 MB  Healthy    System
  Volume 3                      NTFS   Partition    522 MB  Healthy    Hidden
```

จากนั้นให้เลือก `Volume Info = System` ด้วยการระบุหมายเลข `select volume 2`
```bash
DISKPART> select volume 2

  Volume 2 is the selected volume.
```

จากนั้นเพิ่ม `EFI` ไปยัง `Disk Z:` ด้วยคำสั่ง `assign letter=Z`
```bash
DISKPART> assign letter=Z

  DiskPart successfully assigned the drive letter or mount point.
```

จากนั้นออกจาก `DISKPART` ด้วยคำสั่ง `exit`
```bash
DISKPART> exit

  Leaving DiskPart...
```

จากนั้นเปลี่ยน `Disk` เป็น `Z` ด้วยคำสั่ง `z:`
```bash
z:
```

จากนั้นเข้าถึง `EFI` ด้วยคำสั่ง `cd EFI`
```bash
Z:\> cd EFI
```

จากนั้นค้นหา `ubuntu` ด้วยคำสั่ง `dir`
```bash
Z:\EFI> dir
 Volume in drive Z has no label.
 Volume Serial Number is 46B5-1966

 Directory of Z:\EFI

03/09/2025  05:25 AM    <DIR>          .
03/09/2025  05:25 AM    <DIR>          ..
03/09/2025  05:25 AM    <DIR>          Microsoft
03/09/2025  05:29 AM    <DIR>          Boot
03/09/2025  05:29 AM    <DIR>          ubuntu
               0 File(s)              0 bytes
               5 Dir(s)      72,500,224 bytes free
```

จากนั้นทำการลบ `ubuntu` ด้วยคำสั่ง `rmdir /s ubuntu` พิมพ์ `y` เสร็จแล้วกด `enter` 
```bash
Z:\EFI> rmdir /s ubuntu
  ubuntu, Are you sure (Y/N)? y
```

จากนั้นกลับมาที่ `Disk C:` ด้วยคำสั่ง `C:`
```bash
Z:\EFI> C:
```

จากนั้นทำการลบ `Disk Z:` ด้วยคำสั่ง `diskpart`
```bash
C:\Windows\system32> diskpart
```

รอประมวลผลซักครู่ และรันคำสั่ง `select volume 2`
```bash
DISKPART> select volume 2
```

จากนั้นลบ `letter Z:` ด้วยคำสั่ง `remove letter=Z`
```bash
DISKPART> remove letter=Z
```

ปิด `diskpart` ด้วยคำสั่ง `diskpart`
```bash
DISKPART> exit
```

ปิด `command prompt` และ รีสตาร์ทเครื่อง
```bash
C:\Windows\system32> exit
```
